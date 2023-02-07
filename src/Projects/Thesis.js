import "../index.css";
import Header from "../Header";
import Footer from "../Footer";
import { ScrollRestoration } from "react-router-dom";
import { SiPython, SiScikitlearn, SiPandas, SiNumpy } from "react-icons/si";
import thesis_banner from "../Assets/thesis_banner.png";
import thesis_1 from "../Assets/thesis_1.jpg";
import thesis_2 from "../Assets/thesis_2.png";
import thesis_3 from "../Assets/thesis_3.png";

function Thesis() {
  return (
    <div className="Thesis">
      <Header />
      <div className="flex flex-col lg:flex-row lg:h-screen p-8 sm:p-16 xl:p-32 lg:space-x-16">
        <div className="self-center basis-2/5">
          <h1 className="font-bold text-2xl sm:text-4xl 2xl:text-5xl">
            AI Research on SMOTE and Ensembling
          </h1>
          <body className="mt-8 text-sm 2xl:text-base">
            {" "}
            Thesis
            <br />
            <br />
            August / 27 / 22 - December / 13 / 22
            <br />
            <br />
            According to the World Health Organization, an estimated 17.9
            million people died from cardiovascular diseases in the year 2019,
            making it the leading cause of death globally. This thesis aims to
            improve the accuracy of heart disease risk prediction models by
            using a pre-processing technique called Synthetic Minority
            Oversampling Technique (SMOTE) and an ensemble technique called
            Confidence Voting on Support Vector Machine and Random Forest
            algorithms.
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
          <div className="flex flex-row mt-12 justify-between text-3xl sm:text-4xl">
            <SiPython />
            <SiScikitlearn />
            <SiPandas />
            <SiNumpy />
          </div>
        </div>
        <div className="flex flex-col order-first pb-8 py-16 lg:p-0 lg:order-last place-content-center basis-3/5">
          <img className="rounded-xl shadow-xl" src={thesis_banner}></img>
        </div>
      </div>
      <div className="block lg:flex flex-row pt-0 sm:p-16 sm:py-0 xl:p-32 xl:py-0 pt-8">
        <div className="hidden lg:block text-lg sm:pr-16 sm:py-16 xl:pr-32 xl:py-32 w-1/2 sticky top-0 h-min">
          The research aims to improve upon past heart disease prediction models
          using Support Vector Machines and the Random Forest algorithm. It
          compares the past models with their SMOTE and ensembled counterparts.
          The code uses Python libraries to implement the required models and
          functions. The libraries we used were pandas for data analysis and
          manipulation; matplotlib to generate graphs; scikit_learn for
          preprocessing, models and ensembling; and imbalanced_learn for SMOTE.
        </div>
        <div className="p-8 sm:p-16 bg-grey lg:w-1/2 ">
          <img className="" src={thesis_1}></img>
        </div>
      </div>
      <div className="block lg:flex flex-row m-0 xl:m-32 xl:my-0 p-8 sm:p-16 sm:mx-16 bg-grey">
        <div className="lg:w-1/2">
          <img className="w-full" src={thesis_2}></img>
        </div>

        <div className="hidden lg:block text-lg pl-16 w-1/2 flex flex-col place-content-center">
          The dataset without SMOTE has 303 entries, while the dataset with
          SMOTE has 311 entries. The 8 data entries synthesized by the Synthetic
          Minority Oversampling Technique were all males with ages ranging from
          52–62 with heart disease. 
        </div>
      </div>
      <div className="block lg:flex flex-row pt-0 sm:p-16 sm:pt-0 xl:p-32 xl:pt-0 pt-8">
        <div className="hidden lg:block text-lg sm:pr-16 sm:py-16 xl:pr-32 xl:py-32 w-1/2 sticky top-0 h-min">
          The results of the study showed an increase in accuracy when SMOTE was
          utilized. By the end of the study, the new model compared to Reddy et
          al.’s (2021) base model showed a 3% difference in accuracy, with 89%
          for the ensembled models with SMOTE compared to 86% for Reddy.
          <br />
          <br />
          <a
            className="mt-8 underline"
            href="https://drive.google.com/uc?export=download&id=1rFmZIGmvaVP9SBUyoWvY89UDeVxbbnvS"
            target="_blank"
          >
            You can download the thesis papers here.
          </a>
        </div>
        <div className="p-8 sm:p-16 bg-grey lg:w-1/2">
          <img className="" src={thesis_3}></img>
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default Thesis;
