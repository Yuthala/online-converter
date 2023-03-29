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

If request status is "DONE" (equals 4) and server status is 200 "OK", then we parse JSON file form the server into JavaScript object, using .notation for nested elements:

![image](https://user-images.githubusercontent.com/113363158/228621397-a4f86da7-bfa1-46dd-a426-7e6ce2b46bd2.png)



