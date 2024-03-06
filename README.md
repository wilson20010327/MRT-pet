# MRT-pet
## Setup
### Install the require package
* [Node.js](https://nodejs.org/zh-tw/download/)
* [Expo CLI](https://docs.expo.dev/get-started/installation/)
### Clone the project
```bash
git clone https://github.com/wilson20010327/MRT-pet.git
cd MRT-pet
```
### Install the package
```bash
npm install
```
### Try to run the App
Download Expo go Apps on your phone and scan the QRcode the result of command below.
```bash
npx expo --tunnel
```
![image](https://hackmd.io/_uploads/S1dLauk6T.png)


## Contributions to Codebase
### 1. Create a branch. 
```bash
git branch -M username/name-of-your-branch
```
Replace [username] with your preferred name and [name-of-your-branch] with a short name for the feature/fix you wish to implement. 

### 2. Implement code/changes
Make your modifications on your newly created branch. 
- Ensure your commit messages are detailed and readable. 
- Try your best to keep main commit messages in one of the following formats:
    - Add: description-of-added-code
    - Mod: description-of-modification
    - Rem: description-of-code-removal

### 3. Rebase your code and resolve conflicts
Before you send a Pull Request, you have to rebase your code to follow the current version of your target branch. The commits of your branch should be added on top of the target branch. 

However, if you modify code/files that have been modified by other merged pull requests, the owner of the unmerged branch will be in charge of resolving code conflicts before merging and will have to assign the author(s) of the conflicted code as reviewers. 

### 4. Send a Pull Request and assign reviewers. 
Describe your Pull Request in detail: 
- Refer to PR_template.md and draft your Pull Request in the same format. 
- Remember to perform a self-review before you send a Pull Request and ask for others to review your code.
- If comments are given to your code after review, please modify your code and request a re-review.  

### 5. Squash and merge your branch. 
After approval from at least one reviewer, to keep the codebase history clean, when you merge your branch, please squash and merge your commits. 

Name your squashed commit in the format: 
- Feat: brief-description-of-feature
- Fix: brief-description-of-fix