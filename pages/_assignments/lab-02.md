---
layout: assignment-two-column
title: "Machine Learning Lab"
type: homework
abbreviation: Homework
num: 3
draft: 0
lecture_num: 11
points: 10
start_date: 2024-11-14
due_date: 2024-12-08
---
<style>
    blockquote p {
        margin-bottom: 30px;
    }
    blockquote p:last-child {
        margin-bottom: 0px;
    }
    article li, article p {
        line-height: 1.8em;
    }
    article ol > li {
        margin-bottom: 50px;
    }
    article li > ul > li,
    article li > ol > li {
        margin-bottom: 5px;
    }
</style>

In this lab, you will use **Teachable Machine**, a no-code tool by Google, to train a model that can classify different types of input data. We’ll focus on creating custom classes and explore various scenarios where this kind of machine learning technique could be useful and problematic on image data. By the end of this lab, you’ll understand how Teachable Machine works and reflect on its real-world implications.

---

## Part 1: Creating Your Model with Teachable Machine
1. **Access Teachable Machine**:
   - Visit <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a> and click on **Get Started**.

2. **Choose a Project Type**:
   - Select **Image Project** for this lab (though you can experiment with other types later).

3. **Set Up Your Classes**:
You are going to create a classifier, using teachable machine, that can recognize 2-3 different classes (categories). Here are <a href="https://docs.google.com/document/d/12Lzu6JVf6W8ro6SbANRPn8tl1fzvgU8JRwrwjILNxuQ/edit?usp=sharing" target="_blank">some ideas of categories you might try</a>, but don't feel limited to these categories: coming up with good categories will make this assignment more interesting and useful. 

    Keep in mind that because you are making an image classifier, you will need to pick a set of classes that can be learned through video or image data. For instance, if I wanted to create a "cheating detection" model, I would:

   - Click on **Class 1** and name it something like "On Tasks"
   - Click on **Class 2** and name it something like "Distracted"
   - Click on **Class 3** and name it something like "Cheating"
   
4. **Train Your Model**:
   - For each class, record or upload examples that correspond to the classes you've created. For instance, if I wanted to teach the machine what the concept of "Distracted" looks like, I would hold down the webcam button and then "act distracted" (e.g., look away from the camera, act like I was browsing the web, talk to someone off camera, etc.).
   - After adding a sufficient number of images (around 300 webcam frames or 20 uploaded images per class), click **Train Model**.

5. **Test Your Model**:
   - Once your model is trained, test it by showing your webcam or uploading new images to see how well it classifies different emotions.

5. **Download Your Model**:
   - Finally, download your model. You are ready to plug your model into a real-time classification system.

{:.info}
> ### Answer the following questions
> For your convenience, you can also answer the questions using <a href="https://docs.google.com/document/d/1KUIPvbIH04Y2tAtz2iNsNm_WfDpW-L4afHljVVTs828/edit?usp=sharing" target="_blank">this Google Doc</a> (just make a copy of it).
> 1. Describe the model you made and what you trained it to classify.
> 1. How accurate do you think your model is? Please explain when it worked and when it didn't.
> 1. What would make it more accurate?
> 1. What happens when you show your system something that doesn't belong to any of your classes (e.g., you trained your model to recognize cats and birds, but then you show it a walrus)? 
> 1. In your view, is this intelligence? 
>   * If your system could recognize all possible classes (instead of the 2-3 you made) -- would this be intelligence? Do you think this is even possible?
> 1. Bias:
>   * What forms of bias do you think you could eliminate if you had more training examples?
>   * What forms of bias do you think are impossible to eliminate using this machine learning method?


---

## Part 2: Social Analysis
As we have been studying this semester, classification, categorization, and measurement systems shape people's lives in important ways. Given this, it's important to pay attention to how classifiers work (e.g., are they fair and accurate?) and how they are used (e.g., are they tied to high-stakes decision-making?). 

### 2.1. Scenarios
Here are a few scenarios where this type of classification model might be used (and I'm sure you can think of many more):

1. **Customer Service Automation**: You are an engineer who is building an automated customer service system where a webcam tracks customers' facial expressions. The system aims to detect whether the customer is frustrated, happy, or confused and adjust the support responses accordingly.

1. **Interactive Learning Apps for Children**: In educational apps for children, the model could be used to help the app understand whether the child is engaged or bored, adjusting its content or pacing based on emotional responses.

1. **Online Education Monitoring / Workplace Monitoring**: When remote learners / workers have their cameras on, the model could detect whether they are on task and working based on their movements and behavior.

1. **Mental Health Monitoring**: A system designed to help with mental health could track a person’s emotional state over time using facial expressions. By detecting signs of distress or happiness, it might prompt the user with helpful content or resources.

1. **Security Systems**: In security systems, emotional analysis could potentially help assess a person’s mood when entering a building. For example, an anxious person might require extra assistance, or someone showing signs of aggression might trigger an alert.

1. **Accessibility**: The model could help people with disabilities to recognize objects, signs, and gestures, which could facilitate communication or help people better navigate their living spaces.


### 2.2. Social Issues
While these applications may be useful in certain contexts, there is always potential for abuse and/or inappropriate uses. Some categories of issues to consider:

1. **Bias in the training data or in the categories themselves** -- Models might reinforce stereotypes or fail to generalize across diverse populations, leading to unfair outcomes.
    - How might a system that uses facial expressions to make judgments (like determining mood or intent) be biased? Consider differences in how emotions are expressed across cultures and individuals.
   - What are some situations where a misclassification of emotion (e.g., thinking someone is happy when they are anxious) might have serious consequences?
   - What if an object is misrecognized and an inappropriate action is automatically triggered?

1. **Over-reliance on AI** -- Users may place too much trust in the model’s decisions, ignoring its potential for error.
    - To what extent should machine classifications automate what happens in a system (e.g., hardcoding in something like, "If the student looks away from the camera for more than 2 seconds, send an alert to the teacher.")?

1. **Privacy concerns** -- Image-based models can unintentionally expose private or sensitive information if improperly used or stored. 
    * How comfortable are you with systems tracking your emotional state? Recording aspects of your home environment? Recording you when you are out in public?
    * How should consent work in a system like this?
    * What are the ethical concerns around using cameras to monitor people’s emotional reactions and / or activities in real-time?
    * Should systems that monitor your facial expressions be allowed to make decisions about your behavior?

1. **Security risks** -- If a malicious actor exploits the model (e.g., adversarial attacks), it could lead to misuse or failure in critical systems.

1. **Questions of autonomy and freedom from manipulation** -- These tools could exploiting information about your physical appearance to shape your experience of some product of service:
    * Could advertisements or video games use emotional detection to target users more effectively, potentially exploiting their vulnerabilities?
    * In security systems, how do you balance the need for security and automation with respect for personal privacy and autonomy? 
    * Consider the power dynamics around who is doing the watching and who is being watched.


{:.info}
> ### Answer the following questions
>  Pick **ANY TWO** of the scenarios listed above in 2.1. and answer the following for each using <a href="https://docs.google.com/document/d/1KUIPvbIH04Y2tAtz2iNsNm_WfDpW-L4afHljVVTs828/edit?usp=sharing" target="_blank">this Google Doc</a>:
> 1. What scenario did you pick?
> 1. Do you think this system is reasonable / helpful?
> 1. Do you think that investing in a tool like this is worthwhile (consider that funds invested in this technology are funds that aren't invested elsewhere)?
> 1. What societal issues could this technology raise if used inappropriately (consider the list in section 2.2)?
> 1. In your view, who stands to benefit the most from this technology? The least?


## What to Turn In
Please upload the following:
1. A zip file of your model from Teachable Machine, which should contain the following files: `model.json`, `metadata.json`, and `weights.bin`.
1. Your answers to the questions listed on <a href="https://docs.google.com/document/d/12Lzu6JVf6W8ro6SbANRPn8tl1fzvgU8JRwrwjILNxuQ/edit?usp=sharing" target="_blank">the Google Doc</a> as either a Word or PDF document.