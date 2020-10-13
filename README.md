# HospitalApi


## Fetaures


### Routes

#### check uses postman
##### for register
http://localhost:8000/api/v1/doctors/register(use this link)

Output {
    "message": "registered successfully"
   }

##### for login

http://localhost:8000/api/v1/doctors/login
Output

{
    "message": "Sign in,successfull, here is your token and keep it safe!",
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjg1YTg5ZWQ4NmQ3YTMyYjgwYTQzNjkiLCJuYW1lIjoiYWRpdHlhIiwiZW1haWwiOiJzb25hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiamhhIiwiY3JlYXRlZEF0IjoiMjAyMC0xMC0xM1QxMzoxNjoxNC42MDBaIiwidXBkYXRlZEF0IjoiMjAyMC0xMC0xM1QxMzoxNjoxNC42MDBaIiwiX192IjowLCJpYXQiOjE2MDI1OTUxMTYsImV4cCI6MTYwMzU5NTExNn0.AuHyHttzC_cgf5bNkA41i-iKGCv88u-RdGoBnDSHrNg",
        "doctor": {
            "_id": "5f85a89ed86d7a32b80a4369",
            "name": "aditya",
            "email": "sona@gmail.com",
            "password": "jha",
            "createdAt": "2020-10-13T13:16:14.600Z",
            "updatedAt": "2020-10-13T13:16:14.600Z",
            "__v": 0
        }
    }
}

#### for resistered patient

http://localhost:8000/api/v1/patient/register

Output:

{
    "message": "You registered patient successfully",
    "patient": {
        "reports": [
            "5f859c415a7ed466a4d4a940",
            "5f85a5f7d86d7a32b80a4368"
        ],
        "_id": "5f85791f00ff1071b81be10b",
        "name": "rahul",
        "phone": 8750037661,
        "doctor": "5f856bb5e368432e044de2db",
        "createdAt": "2020-10-13T09:53:35.573Z",
        "updatedAt": "2020-10-13T13:04:55.325Z",
        "__v": 2
    }
}


#### for create the report

http://localhost:8000/api/v1/patient/5f859c415a7ed466a4d4a940/create_report









