const axios = require('axios');
const { wordnikApiUrl, wordnikApiKey } = require('./config');
const { randInt } = require('./util');
const words = require('./words');

const getRandomWord = async () => {
  return words[randInt(0, words.length - 1)];
  // const url = `${wordnikApiUrl}/words.json/randomWord?api_key=${wordnikApiKey}`;
  // const result = await axios.get(url);
  // return result.data.word;
};

const getRandomSentence = async () => {
  try {
    const word = await getRandomWord();
    const url = `${wordnikApiUrl}/word.json/${word}/examples?limit=50&api_key=${wordnikApiKey}`;
    const result = await axios.get(url);
    const examples = result.data.examples;
    console.log('word', word);
    return examples[randInt(0, examples.length - 1)].text;
  } catch (err) {
    console.error('error getting sentence. probably exceeded rate limit.');
    console.error(err);
    return 'Bunker is currently soulless.';
  }
};

const handler = async (req, res) => {
  try {
    const { body } = req;
    const { user_name } = body;
    const sentence = await getRandomSentence();

    const slackResponse = {
      response_type: 'in_channel',
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `_${user_name} shakes the Soul Sphere_`,
          },
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: sentence,
          },
        },
      ],
    };

    res.json(slackResponse);
  } catch (e) {
    console.error('an error occurred');
    console.error(e);
    res.status(500).send('error');
  }
};

module.exports = handler;
