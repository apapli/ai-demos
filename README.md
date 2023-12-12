# Azure AI Demos

Contained here are some demo scripts to help you understand how OpenAI can be used. There are a few setup steps you need to do (but not many).


## Demo 1: Auto ML
Script: [AutoML in Azure ML Studio](automl-script.md)

This is a demo script to show your audience how they can use Azure Machine Learning Studio to start testing and validating their own hypotheses.

Apart from offering powerful tooling for data scientists, one of Azure Machine Learning Studio's best features is its ability to offer a simple yet powerful capability for non-data scientists to experiment with data inside their organisation.

### Demo Setup
#### MS Learn Module
This demo is based off the  Microsoft Learn module found here: https://docs.microsoft.com/en-us/learn/modules/use-automated-machine-learning/.
Follow the module yourself and you'll be set to go!


#### Postman Setup (for demonstrating a realtime ML endpoint)
Set up a free account at https://www.postman.com/ and create a POST request to your Bike Rentals ML model (or whatever name you have given it, such as "store visits" if that is more relevant to your audience).

In "Authorization" tab of this request, set the token type as "Bearer" and the token value as the primary auth key associated with your endpoint. (This can be found on the "Consume" tab of the relevant model's endpoint).

Make the payload JSON format, and paste the following "raw" body in:

    {"data": [[1,1,2022,1,0,6,0,2,0.344167,0.363625,0.805833,0.160446]]}



## Demo 2: Azure OpenAI Qualitative to Quantitative
Script: [OpenAI Qual to Quant](qual-to-quant.ipynb)

1. Ensure you have Python installed on your computer, including the modules below.
2. Gain access to Azure OpenAI, then ensure you have created a GPT4 deployment inside it.
3. Clone this code to your computer, and load it in your preferred IDE, for example VSCode.
4. Edit the .env file with your Azure OpenAI credentials.


### Python modules required
You will need a handful of modules installed on your computer for this code to work. Just run the following command from the command line.

    sudo apt install python3
    sudo apt install python3-pip
    pip install openai python-dotenv


Happy demo'ing, and feel free to submit suggestions via a pull request to make this even better!