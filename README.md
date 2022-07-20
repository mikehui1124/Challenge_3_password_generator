# Simple and Powerful_password_generator

This is a html and JavaScript source-code for a Password Generator which accepts password size and character type preference from user, then generate the random password accordingly and finally display inside a textbox. A simple but clean user interface is available in the webpage.

The completed html and JavaScript source-code are available in the following Github repo as Master branch, file names as listed below. The deployed URL of webpage is available in Github Page @ https://mikehui1124.github.io/Challenge_3_password_generator/

•	Index.html

•	Script.js

•	Style.css


Brief description

The application allows employees to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.


Snapshot of Password Generator

![image](https://user-images.githubusercontent.com/105307687/180038815-4a5384e4-f538-47ef-b09f-2fe0f5288025.png)


Acceptance criteria

The application will meet the following criteria expected by an employee user,
-	Opening the application, user can randomly generate a password that meets certain criteria, creating a secure password
-	Opening the application, user is presented with a series of prompts for password criteria
-	When prompted for the length of the password, user can choose a length of at least 8 characters and no more than 128 characters
-	When asked for character types to include in the password, user confirms whether or not to include lowercase, uppercase, numeric, and/or special characters
-	When user answers each prompt,  then his input should be validated and at least one character type should be selected
-	When all prompts are answered, a password is generated that matches the selected criteria
-	When the password is generated, the password is either displayed in an alert or written to the page.




Validation of Password Criteria from User

Starting the app, user is prompted to select firstly the length of password and then secondly which character type(s) should be included. Length of password will be validated by the app to span between 8 to 128 characters long (ie. via the use of While Loop condition), otherwise the following reminder is prompted to user until the right PW size is selected.

![image](https://user-images.githubusercontent.com/105307687/180038956-4876941c-33e6-4cf2-a628-cbf7e29ceaa8.png)
![image](https://user-images.githubusercontent.com/105307687/180038981-17b3e592-fdb0-49f7-8e5b-0868fafa7387.png)


Secondly, character type preference will be validated again that at least one of the four character-type is selected by user, otherwise the following reminder is prompted until at least one character-type is selected.

![image](https://user-images.githubusercontent.com/105307687/180039084-e1ee9e90-742f-4e0a-b3a8-9694fc42cac0.png)
![image](https://user-images.githubusercontent.com/105307687/180039128-ae9c3d5a-264d-496c-b106-be4215971f27.png)
![image](https://user-images.githubusercontent.com/105307687/180039156-25edd8c6-6796-4885-b363-8a2fe65ffada.png)
![image](https://user-images.githubusercontent.com/105307687/180039181-a01d9844-6575-4737-9959-583e647e69d6.png)
![image](https://user-images.githubusercontent.com/105307687/180039207-cf2ded57-c72b-4536-bb6e-3e8c489a52c4.png)



Simple and Effective User Inferface

When password preference passess the validation, user can press the red button on the page and then the requested random password will be displayed in the textbox. 
Pressing the button again, a new random password will be generated and displayed according to the same password preference.

![image](https://user-images.githubusercontent.com/105307687/180039248-3d140078-cb02-45ba-ae8a-7c86d96966a9.png)



Special Features to Streamline App Functionality 

Two advanced features in JavaScript are used to realize the password criteria selected by user, while keeping the code clean and concise.
-	Firstly, each of the four randoming functions by character type are stored in a master object sorted by well-defined key string, awaiting to be called upon after receiving the selected char type(s) from user,

![image](https://user-images.githubusercontent.com/105307687/180039355-6d8568ec-f271-4cf7-9229-06b78e8f14fe.png)

-	Secondly, an array of object is created to store the selected character type(s). Next pass the array to ‘.forEach’ method to extract the key string relevant to each selected character type(s). Finally, pass the key string back to the master object to call the right randoming function (ie. by using objectName[“key string”]()  syntax) , generating one PW character at a time that matches the criteria.
	
![image](https://user-images.githubusercontent.com/105307687/180039406-9c8c5e7d-cd9d-4b12-a23f-a51a87bd8225.png)

	















