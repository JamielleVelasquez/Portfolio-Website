import "../index.css";
import Header from "../Header";
import Footer from "../Footer";
import { ScrollRestoration } from "react-router-dom";
import { SiPython, SiScikitlearn, SiPandas, SiNumpy } from "react-icons/si";
import thesis_banner from "../Assets/thesis_banner.png";
import thesis_1 from "../Assets/thesis_1.jpg";
import thesis_2 from "../Assets/thesis_2.png";
import thesis_3 from "../Assets/thesis_3.png";

function KaEnteng() {
  return (
    <div className="Thesis">
      <Header />
      <div className="flex flex-row h-screen p-32 space-x-16">
        <div className="self-center basis-3/5">
          <h1 className="font-bold text-5xl">
            AI Research on SMOTE and Ensembling
          </h1>
          <body className="mt-8">
            Thesis
            <br />
            August / 27 / 22 - December / 13 / 22
            <br />
            
          </body>
          <body className="mt-8">
          According to the World Health Organization, an estimated 17.9 million people died from cardiovascular diseases in the year 2019, making it the leading cause of death globally. This thesis aims to improve the accuracy of heart disease risk prediction models by using a pre-processing technique called Synthetic Minority Oversampling Technique (SMOTE) and an ensemble technique called Confidence Voting on Support Vector Machine and Random Forest algorithms.
          </body>
          <div className="mt-8">
            <a
              className="underline"
              href="https://github.com/JamielleVelasquez/SVM-RF-Heat-Disease-Prediction"
              target="_blank"
            >
              Github Repository Link
            </a>
          </div>
          <div className="flex flex-row mt-8 justify-between text-4xl">
            <SiPython />
            <SiScikitlearn />
            <SiPandas />
            <SiNumpy />
          </div>
        </div>
        <div className="flex flex-col place-content-center">
          <img className="rounded-xl shadow-xl" src={thesis_banner}></img>
        </div>
      </div>
      <div className="flex flex-row p-32 pb-0 pt-8">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        The research aims to improve upon past heart disease prediction models using Support Vector Machines and the Random Forest algorithm. It compares the past models with their SMOTE and ensembled counterparts. The code uses Python libraries to implement the required models and functions. The libraries we used were pandas for data analysis and manipulation; matplotlib to generate graphs; scikit_learn for preprocessing, models and ensembling; and imbalanced_learn for SMOTE.
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="" src={thesis_1}></img>
        </div>
      </div>
      <div className="flex flex-row m-32 my-0 p-16 bg-grey">
          <img className="grow rounded-xl" src={thesis_2}></img>
        
        <div className="text-lg pl-16 w-1/2 flex flex-col place-content-center">
        The dataset without SMOTE has 303 entries, while the dataset with SMOTE has 311 entries. The 8 data entries synthesized by the Synthetic Minority Oversampling Technique were all males with ages ranging from 52–62 with heart disease. 
        </div>
      </div>
      <div className="flex flex-row p-32 pt-0">
        <div className="text-lg pr-32 py-32 w-1/2 sticky top-0 h-min">
        The results of the study showed an increase in accuracy when SMOTE was utilized. By the end of the study, the new model compared to Reddy et al.’s (2021) base model showed a 3% difference in accuracy, with 89% for the ensembled models with SMOTE compared to 86% for Reddy.
          <button className="mt-8 underline">
            You can download the thesis papers here.
          </button>
        </div>
        <div className="p-16 bg-grey w-1/2 ">
          <img className="rounded-xl" src={thesis_3}></img>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default KaEnteng;
