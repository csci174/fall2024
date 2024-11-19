---
layout: assignment-two-column
title: "Machine Learning Lab"
type: homework
abbreviation: Homework
num: 3
draft: 1
lecture_num: 11
points: 10
start_date: 2024-11-14
due_date: 2024-12-02
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

## Lab: Using Teachable Machine to Create Different Classes

In this lab, we will use **Teachable Machine**, a no-code tool by Google, to train a model that can classify different types of input data. We’ll focus on creating custom classes and explore various scenarios where machine learning like this could be useful and problematic. By the end of this lab, you’ll understand how Teachable Machine works and reflect on its real-world implications.

---

### Part 1: Setting Up Teachable Machine
1. **Access Teachable Machine**:
   - Visit <a href="https://teachablemachine.withgoogle.com/" target="_blank">Teachable Machine</a> and click on **Get Started**.

2. **Choose a Project Type**:
   - Select **Image Project** for this lab (though you can experiment with other types later).

3. **Set Up Your Classes**:
   - Click on **Class 1** and name it something like "Happy" or "Smiling."
   - Click on **Class 2** and name it something like "Sad" or "Frowning."
   - Click on **Class 3** and name it something like "Surprised" or "Neutral."
   
4. **Train Your Model**:
   - For each class, upload or record examples of people showing the corresponding emotions (happy, sad, surprised, etc.). You can use your webcam or upload images.
   - After adding a sufficient number of images (around 10-20 per class), click **Train Model**.

5. **Test Your Model**:
   - Once your model is trained, test it by showing your webcam or uploading images to see how well it classifies different emotions.

5. **Download Your Model**:
   - Finally, download your model. You are ready to plug your model into a real-time classification system.

{:.info}
> ### Questions to think about
> * How accurate do you think your model was?
> * What would have made it more accurate?
> * What forms of bias do you think you could eliminate if you had more training examples?
> * What forms of bias do you think are impossible to eliminate using this method?


---

### Part 2: Exploring Use Cases
Here are a few scenarios where this type of classification model could be useful:

1. **Customer Service Automation**:
   - Imagine you’re working on an automated customer service system where a webcam tracks customers' facial expressions. The system could detect whether the customer is frustrated, happy, or confused and adjust the support responses accordingly.

2. **Interactive Learning Apps for Children**:
   - In educational apps for children, the model could be used to help the app understand whether the child is engaged or bored, adjusting its content or pacing based on emotional responses.

3. **Mental Health Monitoring**:
   - A system designed to help with mental health could track a person’s emotional state over time using facial expressions. By detecting signs of distress or happiness, it might prompt the user with helpful content or resources.

4. **Security Systems**:
   - In security systems, emotional analysis could potentially help assess a person’s mood when entering a building. For example, an anxious person might require extra assistance, or someone showing signs of aggression might trigger an alert.

---

### Part 3: Reflection and Critical Thinking
While these applications can be very useful, it’s important to think about when this technology could be both a **good thing** and a **bad thing**.

**Reflect on the following questions**:
1. **Bias and Accuracy**:
   - How might a system that uses facial expressions to make judgments (like determining mood or intent) be biased? Consider differences in how emotions are expressed across cultures and individuals.
   - Can you think of situations where a misclassification of emotion (e.g., thinking someone is happy when they are anxious) might have serious consequences?

2. **Privacy Concerns**:
   - Facial recognition and emotion detection can raise privacy issues. How comfortable are you with systems tracking your emotional state without explicit consent?
   - What are the ethical concerns around using cameras to monitor people’s emotional reactions in real-time?

3. **Emotional Manipulation**:
   - Could this technology be used in ways that manipulate people? For example, could advertisements or video games use emotional detection to target users more effectively, potentially exploiting their vulnerabilities?
   
4. **Security vs. Autonomy**:
   - How do you balance the need for security and automation with respect for personal privacy and autonomy? Should systems that monitor your emotions be allowed to make decisions about your behavior?

5. **The Role of Human Oversight**:
   - How might human oversight be essential when using emotion-detection systems? What kinds of safeguards would you put in place to ensure that these systems are used ethically?

---

### Conclusion
Machine learning tools like Teachable Machine are powerful and can be used to create innovative solutions for a variety of applications. However, it’s important to remember that every technological advancement comes with both benefits and challenges. By reflecting on the ethical implications, you can ensure that you’re designing systems that are not only effective but also fair and responsible.

---

### Homework:
- **Create Your Own Model**: In the next session, use Teachable Machine to create your own model with at least three different classes. Explore how different scenarios might change the classes you need to classify.
- **Write a Short Essay**: Based on the reflection questions, write a short essay (1-2 paragraphs) discussing when this type of emotional classification could be used for good and when it could have negative consequences.
