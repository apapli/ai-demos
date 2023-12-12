# generative-ai-demos

Contained here are some demo scripts to help you understand how OpenAI can be used. There are a few setup steps you need to do (but not many).


1. Ensure you have Python installed on your computer, including the modules below.
2. Gain access to Azure OpenAI, then ensure you have created a GPT4 deployment inside it.
3. Clone this code to your computer, and load it in your preferred IDE, for example VSCode.
4. Edit the .env file with your Azure OpenAI credentials.


### Python modules required
You will need a handful of modules installed on your computer for this code to work. Just run the following command from the command line.

    sudo apt install python3
    sudo apt install python3-pip
    pip install openai python-dotenv



### For the API

You'll need nodejs and the express & body-parsers frameworks installed on your computer. If you don't already, here are the commands to use, assuming you are using Ubuntu 22.04LTS on WSL (Windows Subsystem for Linux)

    sudo apt update
    sudo apt install nodejs
    sudo apt install npm
    npm install express body-parser
