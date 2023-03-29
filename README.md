# online-converter
Online currency converter using XML HTTP Requests

HTML + CSS + JavaScript (XMLHttpRequest + AJAX + JSON)

Converts Russian Rubles into USD and EUR using AJAX. API from Central Bank Russian Federation website. 

3 steps to create XMLHttpRequest:
Number 1. Open request:

![image](https://user-images.githubusercontent.com/113363158/228619824-a573a7ee-46ef-4e20-ac6a-ecb558025ac7.png)

Number 2. Create request header:

![image](https://user-images.githubusercontent.com/113363158/228620137-9a806466-a21a-42ba-9945-645369d646ac.png)

Number 3. Send 'body' of the request. Since we send GET request the 'body' of the request has no arguments:

![image](https://user-images.githubusercontent.com/113363158/228620307-f11cb927-1806-4926-9452-a56f9df95ed0.png)

After sending XMLHttpRequest the code monitors request state change. If the request status is "DONE" (equals 4) and server status is 200 "OK", then we parse JSON file form the server into JavaScript object, using .notation for nested elements:

![image](https://user-images.githubusercontent.com/113363158/228621397-a4f86da7-bfa1-46dd-a426-7e6ce2b46bd2.png)

The following 2 lines make conversion calculations from Rubles to USD and EUR and add the result on the webpage (in relevant inputs):

![image](https://user-images.githubusercontent.com/113363158/228621934-2aca0191-39e1-40df-9bff-61a39a6d50b1.png)

'Else" informs the user if something is wrong with the request or amount entered:

![image](https://user-images.githubusercontent.com/113363158/228622849-0bf8b9b0-5390-4e20-999c-eea2afedd31d.png)

-----
As you can see there are no buttons on a webpage. Conversion works with AJAX. 
The code starts working when a user enters anything in inputRub field (event - input):

![image](https://user-images.githubusercontent.com/113363158/228623631-5dee6580-0f7c-4b98-adf8-2658789a127c.png)

For better user performance field validation can be added. I skipped this step in order to keep things simple.



