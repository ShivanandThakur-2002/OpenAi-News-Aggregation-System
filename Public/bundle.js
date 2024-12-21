/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  document.getElementById(\"news-form\").addEventListener(\"submit\", async function (event) {\r\n      event.preventDefault();\r\n\r\n      const companyName = document.getElementById(\"company-name\").value;\r\n      const startDate = document.getElementById(\"start-date\").value;\r\n      const endDate = document.getElementById(\"end-date\").value;\r\n      const emailAddress = document.getElementById(\"email-address\").value;\r\n      const outputDiv = document.getElementById(\"output\");\r\n      const emailConfirmationDiv = document.getElementById(\"email-confirmation\");\r\n\r\n      // Clear previous output and show a loading message\r\n      outputDiv.textContent = \"Loading...\";\r\n      emailConfirmationDiv.textContent = \"\";\r\n\r\n      try {\r\n          const response = await fetch(\"/fetch-news\", {\r\n              method: \"POST\",\r\n              headers: { \"Content-Type\": \"application/json\" },\r\n              body: JSON.stringify({ companyName, startDate, endDate }),\r\n          });\r\n\r\n          if (!response.ok) {\r\n              throw new Error(\"Failed to fetch news\");\r\n          }\r\n\r\n          const result = await response.json();\r\n          const newsSummary = result.news || \"No news found.\";\r\n          outputDiv.textContent = newsSummary;\r\n\r\n          // Send email with the news summary\r\n          const emailResponse = await fetch(\"/send-email\", {\r\n              method: \"POST\",\r\n              headers: { \"Content-Type\": \"application/json\" },\r\n              body: JSON.stringify({ emailAddress, newsSummary }),\r\n          });\r\n\r\n          if (!emailResponse.ok) {\r\n              throw new Error(\"Failed to send email\");\r\n          }\r\n\r\n          emailConfirmationDiv.textContent = \"Email sent successfully.\";\r\n      } catch (error) {\r\n          emailConfirmationDiv.textContent = \"Error: \" + error.message;\r\n      }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://scrachpad/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;