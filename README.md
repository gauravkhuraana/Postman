# 📬 Postman — Collections, Scripts & Resources

> A curated collection of Postman collections, JavaScript snippets, and learning resources to help you and others master API testing.

[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/)
[![API Testing](https://img.shields.io/badge/API%20Testing-Learning-blue?style=for-the-badge)](https://udzial.com/category/api-testing/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 🏆 Achievement

![30 Days of Postman Badge](30%20days%20of%20Postman%20-%20for%20developers%20-%202021-08-11%20-%20Gauravkhurana.png)

Completed the **30 Days of Postman for Developers** challenge 🎉

---

## 🎥 Featured Video

[![Watch the Postman video on YouTube](https://img.youtube.com/vi/Z7zgosqc0SA/hqdefault.jpg)](https://www.youtube.com/watch?v=Z7zgosqc0SA)

Check out this video for more Postman tips and walkthroughs.

---

## 📚 Learning Resources

| Resource | Link |
|---|---|
| 📖 Postman Tutorial & Notes | [udzial.com/postman-tutorial-notes](https://udzial.com/postman-tutorial-notes/) |
| 🗺️ Postman Mindmap (Interactive) | [Open Mindmap](https://htmlpreview.github.io/?https://raw.githubusercontent.com/gauravkhuraana/Postman/main/POSTMAN.html) |
| 🚀 Start API Testing | [udzial.com/category/api-testing](https://udzial.com/category/api-testing/) |
| 🔗 Connect with me | [linktr.ee/gauravkhurana](https://linktr.ee/gauravkhurana) |

---

## 📁 Repository Structure

```
📦 Postman
 ┣ 📂 Azure/                         # Azure DevOps Postman collections & guides
 ┃ ┣ 📜 Azure Test Plans.postman_collection.json
 ┃ ┗ 📖 RestAPIToUpdateTestResultsInADO.md
 ┣ 📂 Google/                         # Google API collections & environments
 ┃ ┣ 📜 Google Basic.postman_collection.json
 ┃ ┗ 📜 google environment.postman_environment.json
 ┣ 📂 Javascripts/                    # Reusable JS snippets for Postman scripts
 ┃ ┣ 📜 Assertions_in_postman.js      # Common assertion patterns
 ┃ ┣ 📜 timeCounter_postman_Javascript.js  # Daily challenge reminder via monitor
 ┃ ┣ 📜 visualise_response.js         # Visualize test results with images & tables
 ┃ ┣ 📜 writeToFile.js                # Express server to write response to file
 ┃ ┗ 📜 spaceReport.json              # Sample output from writeToFile
 ┣ 📂 Results/                        # Test run output samples
 ┃ ┗ 📜 junitReport.xml
 ┣ 📄 POSTMAN.html                    # Interactive Postman Mindmap
 ┗ 📄 README.md
```

---

## 🗂️ Collections

### ☁️ Azure DevOps
Work with **Azure Test Plans** via REST APIs directly from Postman.

- Fetch test point details for a specific test case
- Update test point outcomes (Pass / Fail / Blocked, etc.)
- Full curl import examples included

👉 See the full guide: [Azure/RestAPIToUpdateTestResultsInADO.md](Azure/RestAPIToUpdateTestResultsInADO.md)

---

### 🔍 Google
Basic Google API collection with a ready-to-use environment file.

| File | Description |
|---|---|
| `Google Basic.postman_collection.json` | Collection of basic Google API requests |
| `google environment.postman_environment.json` | Pre-configured environment variables |

---

## 🛠️ JavaScript Snippets

Reusable scripts for your Postman **Pre-request Scripts** and **Tests** tabs.

| File | What it does |
|---|---|
| [`Assertions_in_postman.js`](Javascripts/Assertions_in_postman.js) | Comprehensive library of Postman assertion patterns — status codes, headers, body values, cookies, response time, nested JSON, arrays, and more |
| [`timeCounter_postman_Javascript.js`](Javascripts/timeCounter_postman_Javacript.js) | Sends daily challenge reminders using a Postman Monitor and `moment.js` |
| [`visualise_response.js`](Javascripts/visualise_response.js) | Displays test results as GIF images and renders response data as an HTML table using `pm.visualizer` |
| [`writeToFile.js`](Javascripts/writeToFile.js) | Lightweight Express.js server that receives a Postman webhook payload and saves the response body as a JSON file |

### 💡 Quick Snippet Examples

**Assert a property exists with a value:**
```js
pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});
```

**Extract a value from a nested JSON response:**
```js
let col = pm.response.json().col;
let folder = col.ite.find(fol => fol.name === "Collections and environments");
pm.expect(folder.ite.length, 'check number of requests').to.equal(2);
```

**Set a collection variable from a response:**
```js
pm.collectionVariables.set("id", pm.response.json().id);
```

---

## 🚀 Getting Started

1. **Install [Postman](https://www.postman.com/downloads/)**
2. **Import a collection:**
   - Open Postman → Click **Import**
   - Drag and drop any `.postman_collection.json` file from this repo
3. **Import an environment** (if applicable):
   - Go to **Environments** → **Import** → select the `.postman_environment.json` file
4. **Use the JS snippets:**
   - Copy any snippet from the `Javascripts/` folder into the **Pre-request Script** or **Tests** tab of your request or collection

---

## 🤝 Contributing

Found something useful? Have a cool collection or snippet to share?

- ⭐ Star this repository
- 🍴 Fork and submit a Pull Request
- 💬 Reach out via [linktr.ee/gauravkhurana](https://linktr.ee/gauravkhurana)

---

*Made with ❤️ by [Gaurav Khurana](https://linktr.ee/gauravkhurana) · [udzial.com](https://udzial.com)*
