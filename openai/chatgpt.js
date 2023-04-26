const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");
const readline = require('readline');

const configuration = new Configuration({
    apiKey: "open ai key",
});

function y()
{
    const fs = require("fs");

    var data=fs.readFileSync("/Users/lithin/WebstormProjects/MyFramework/openai/login.json")

    const users = JSON.parse(data);
    var x=JSON.stringify(users.elements.lblEnterMobile.xpath)
    return x
}

  function  x()
{
    return new Promise(function (resolve,reject) {
    let currentLine = 0; // Counter variable for current line

    const readInterface = readline.createInterface({
        input: fs.createReadStream('/Users/lithin/WebstormProjects/MyFramework/openai/script.txt'),

    });

    readInterface.on('line', function(line) {
        currentLine++;
        if (line.includes("using")) {

            readInterface.close();
            resolve(line)

        }
    });
    })

}


async function getAiResponse(topic) {
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: topic,
        max_tokens: 1024,
        n: 1,
        stop: null,
        temperature: 0.7
    });
    console.log(completion.data.choices[0].text);
}

getAiResponse(   "write a autonmation test script using selenium and go to url www.lithin.com using xpath for login"+ y()+"in java");
