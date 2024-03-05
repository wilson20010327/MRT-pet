## Motivation and Context
<!--- For code addition: Which functions/features are implemented? Why are they added? -->
I have added a PR_template.md to guide developers of this codebase to better explain their modifications to the project code. I have also included some instructions for this template in the README. 
<!--- For code modifications: Why is this change required? What problem does it solve? -->
I have modified one filename to fix an unintentional typo. 


## Description
<!--- Describe your changes in detail. -->
### Overview
For the added PR_template.md, it includes 4 sections: 
- Motivation and Context: Overview of the Pull Request
- Description: Detailed description of the code implementation. 
- Testing: Steps you took (if any), to test the stability and quality of your implemented code. 
- Checklist: Self-review checklist that has to be completed before you request a review. 

For the modified filename: 
- Assitant.js -> Assistant.js

In the updated README: 
- I have added instructions on how to use the PR_template. 
<!--- In steps, explain the methodology of your implementation, what you did, and why you chose this approach over others(if any, please specify). -->
### Approach: 
I chose to include a PR_template in a .md file and not a .txt file (or any other format) because it supports the same syntax as Pull Request comments on GitHub. This allows you to copy and paste the contents within this file to your Pull Request on GitHub. 
<!--- Any recommended review steps or notes to the reviewer of the code? -->
### Notes
To all reviewers: Please read through all diffs in all changed files and ensure that every line of code makes sense to you. Do not hesitate to comment/ask/request modifications if you find it necessary. 

## Testing
<!--- Please describe in detail how you tested your changes. -->
In this section you can list the test cases or scenarios you have tested on the new code. E.g.: 
1. Any method of testing: 
    - Checked UI of buttons A,B and pages 1,2 and found no anomalies or faults. 
    - Built the test multiple times and tested functionality on multiple devices. 
2. Happy (positive) test case scenarios: (tests that the code performs expected behavior)
    - Given I am on Page 2; When I press button A; Then I am redirected to page 1, and page 1 shows the correct content. 
    - Given I am on Page 1; When I press button B; Then I am redirected to page 2, and page 2 shows the correct content. 
3. Negative test case scenarios: (tests that the code does not show unexpected behavior)
    - Given I am on Page 2; When I press button B; Then I should stay on original page, and no content should change. 
    - Given I am on Page 1; When I press button A; Then I should stay on original page, and no content should change.
<!--- your change affects other areas of the code, etc. -->
The addition of the PR_template.md and modification of the README does not affect other areas of the code. However, the modified filename affects line 5 in App.js. 

## Checklist

<!--- Go over all the following points, and put an `x` in all the boxes that apply. -->

- [x] I have rebased this branch to follow the target branch I want to merge into. 
- [x] I have thoroughly tested my code and described the pull request clearly. 
- [x] I have performed a self-review of my code and have made sure all modified files are intentional changes. 
