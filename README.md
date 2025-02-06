# Unhandled Promise Rejection in Node.js Async Function

This repository demonstrates a scenario where an asynchronous function in Node.js does not resolve or reject, leading to an unhandled promise rejection.  The issue is subtle and can be difficult to track down.

## The Problem

The `bug.js` file contains a simple HTTP server. However, it includes a deliberately problematic asynchronous function.  This function never resolves or rejects a promise, resulting in the application silently hanging without explicit error messages.  This can lead to confusion in larger applications. 

## The Solution

The `bugSolution.js` file offers a corrected version. It introduces proper error handling to catch potential exceptions and utilizes `setTimeout` as a fallback mechanism to prevent indefinite hanging.