
# 📘 Azure DevOps Test Point API Guide

This README explains how to **fetch** and **update** test points in a specific Azure Test Plan Suite using Azure DevOps REST APIs.

---

## 🔹 1. Get Test Point Details

**GET Endpoint:**

```
GET https://dev.azure.com/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint?testCaseId={testCaseId}&api-version=7.2-preview.2
```

**Sample:**

```
GET https://dev.azure.com/khuraanagaurav/Automation/_apis/testplan/Plans/20/Suites/33/TestPoint?testCaseId=23&api-version=7.2-preview.2
```

### 🔄 Replaceable Parameters:
| Placeholder        | Description                                      | Example             |
|--------------------|--------------------------------------------------|---------------------|
| `{organization}`   | Your Azure DevOps organization name              | `khuraanagaurav`    |
| `{project}`        | Name of the Azure DevOps project                 | `Automation`        |
| `{planId}`         | ID of the Test Plan                              | `20`                |
| `{suiteId}`        | ID of the Test Suite                             | `33`                |
| `{testCaseId}`     | ID of the Test Case to filter specific test point| `23`                |

![image](https://github.com/user-attachments/assets/6689119f-2980-4167-9277-8d7f8559400b)


---

## 🔹 2. Update Test Point Outcome

**PATCH Endpoint:**

```
PATCH https://dev.azure.com/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint?api-version=7.2-preview.2
```

**Sample:**

```
PATCH https://dev.azure.com/khuraanagaurav/Automation/_apis/testplan/Plans/20/Suites/33/TestPoint?api-version=7.2-preview.2
```

**Request Header:**

```
Content-Type: application/json
Authorization: Basic <Base64 PAT>
```

> 🔐 Use a [Personal Access Token (PAT)](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate) encoded as `Basic <Base64>` for authorization.

**Request Body Format:**

```json
[
  {
    "id": <testPointId>,
    "results": {
      "outcome": <outcomeValue>
    }
  }
]
```

**Sample Body:**

```json
[
  {
    "id": 15,
    "results": {
      "outcome": 2
    }
  }
]
```
![image](https://github.com/user-attachments/assets/3816195e-a7a9-4673-982d-cc6b018d8715)


### 🔄 Replaceable Fields:

| Field          | Description                                      | Example |
|----------------|--------------------------------------------------|---------|
| `id`           | ID of the Test Point to be updated               | `15`    |
| `outcome`      | Test result outcome (integer value)              | `2`     |

**Outcome values:**

| Value | Outcome        |
|-------|----------------|
| 0     | Unspecified    |
| 1     | None           |
| 2     | Passed         |
| 3     | Failed         |
| 4     | Inconclusive   |
| 5     | Timeout        |
| 6     | Aborted        |
| 7     | Blocked        |
| 8     | NotExecuted    |
| 9     | Warning        |
| 10    | Error          |
| 11    | NotApplicable  |

---

## ✅ Example Flow

1. **Get** the test point ID for a specific test case using the **GET** endpoint.
2. Use that test point ID in the **PATCH** body to update its result.
3. Authenticate with your PAT in the request header.

---

## 🛠 Tools You Can Use

- [Postman](https://www.postman.com/)
- curl (command line)
- Custom scripts (e.g., using Python, PowerShell, or C#)
