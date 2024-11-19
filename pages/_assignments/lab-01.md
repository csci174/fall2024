---
layout: assignment-two-column
title: "Computer Architecture Lab"
type: homework
abbreviation: Homework
num: 2
draft: 0
lecture_num: 11
points: 10
start_date: 2024-11-12
due_date: 2024-11-24
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

{:.info}
> ## Instructions
> Please answer the following questions in a Word / Google document, and upload your document to Moodle by the due date.
> 
> ## Guidelines for using online resources 
> You may use an any online resource, including an AI assistant, as a research and learning tool. However, it is not acceptable to copy / paste answers into this homework. Make sure that the answers are in your own words, and that you understand what you are typing. Please also note at the bottom of this document which research tools you used to help you learn.

## Binary to Decimal
1. What is the binary number system, and how does it differ from the decimal number system?


1. Convert the following binary numbers to decimal, showing your work (e.g., 1*2^3 + 1*2^0). Feel free to take a photo of your work if you did it on paper and include it in your Google Doc.

    ```
      111
     1011
    11001
    10010
    ``` 


1. Convert the following decimal numbers to binary, showing your work (e.g. First I divided by 16, then divided the remainder by 2, etc.). Feel free to take a photo of your work if you did it on paper and include it in your Google Doc.

    ```
    5
    12
    27
    ```


1. Explain what a "bit" and a "byte" are. How many bits are in a byte?


1. Perform the following binary addition problems, showing your work:

    ```
    0101 + 0011
    1010 + 0110
    1111 + 0001
    ```


## Circuits & Logic Gates
1. What is a transistor? How does it work? Why is it important for modern computing?

1. In your own words, describe what the following logic gates do:

    1. AND
    1. OR
    1. NOT
    1. XOR

1. Explain how the binary number system relates to logic gates and why binary is suitable for computers.

## Logic Gate Challenges
Using a circuit builder (I recommend <a href="https://logic.ly/demo/" target="_blank">Logic.ly</a>), design circuits for the following two challenges (described below). When you've gotten your circuit to work, take a screenshot and paste it in the appropriate section:

1. **Majority of Votes Wins**<br>
Create a logic circuit with three inputs (A, B, C) that outputs HIGH only if the majority of the inputs are HIGH.

    * Consider when two or more of the inputs are HIGH.
    * This circuit will require multiple AND and OR gates.


1. **Garage Door Opener**<br>
Create a logic circuit that acts like a digital combination lock. It should have four inputs (A, B, C, and D) and only light an LED if the correct combination of HIGH and LOW (ON / OFF) inputs is provided.

    For this example, let's say that the combination is:
    
    * A = ON
    * B = OFF
    * C = ON
    * D = ON
    
    Use AND, OR, and NOT gates to implement the lock conditions.


## The Von Neumann Architecture

1. What is the Von Neumann architecture? List and describe its main components.
1. Explain how the CPU, memory, and storage work together to execute a program.
1. What are examples of of some input and output devices that your computer uses to send and receive information?


## Computers v. The Brain
1. Ask an AI Q&A tool like <a href="https://chatgpt.com/" target="_blank">ChatGPT</a>, <a href="https://gemini.google.com/" target="_blank">Gemini</a>, or <a href="https://www.perplexity.ai/" target="_blank">Perplexity</a> how computers and the human brain are similar and different. Then, in 200 words or less, describe some key differences that you found (consider things like energy use, capabilities like creativity and imagination, speed, and adaptability).

