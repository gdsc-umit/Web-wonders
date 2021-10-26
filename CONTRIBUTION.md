# Contributing Guidelines

## Forking
You should fork the project so that you can make changes in your personal space without affecting the orignal repository.

## Guidance 
If you want any help or guidance you can always reach out to the GDSC-UMIT Team.

## Nervous ??
Don't feel nervous if this is your first contribution. Every expert was once a beginner. Feel free to reach out to us for any problem on my social media handles which are given in the readme file 😊 .

## Successful Contribution 
If you successfully made your first contribution, then you must add your name in the list of contributors.

## How to Contribute

## GIT AND GITHUB

Before continuing we want to clarify the difference between Git and Github. Git is a version control system(VCS) which is a tool to manage the history of our Source Code. GitHub is a hosting service for Git projects.

We assume you have created an account on Github and installed Git on your System.

Now tell Git your name and E-mail (used on Github) address.

     $ git config --global user.name "YOUR NAME"
     $ git config --global user.email "YOUR EMAIL ADDRESS"
     

This is an important step to mark your commits to your name and email.

### FORK A PROJECT -

You can make a copy of the project to your account to work on it. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>

Click on fork to create a copy of project to your account. This creates a separate copy for you to workon.

### CLONE THE FORKED PROJECT -

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

```$ git clone https://github.com/<your-account-username>/Web-wonders.git```  
Now you have the project on your local machine.

### ADD A REMOTE (UPSTREAM) TO ORIGINAL PROJECT REPOSITORY 

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

    $ cd <your-forked-project-folder>
    $ git remote add upstream https://github.com/<author-account-username>/Web-wonders.git
    
You will see the benefits of adding remote later.

### SYNCHRONIZING YOUR FORK -

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.


    $ git checkout main
    $ git fetch upstream
    $ git merge upstream/main
    $ git push origin main
  

The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

### ADD YOUR CODE AND COMMIT IT -

Once you add your files inside the folders (with your name), run the following commands to commit your changes --

    $ git add .
    $ git commit -m "<commit message>"
    

The first command adds all the files or you can add specific files by removing . and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. Remember, you should add a sensible commit message. This will show the reference to commits.

### PUSH CODE AND CREATE A PULL REQUEST -

Till this point you have a new branch with the feature or bugfix you want in the project you had forked. Now push your new branch to your remote fork on github.

```$ git push origin main```
    
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bugfix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be main. Click on create pull request and add a name to your pull request. You can also describe your feature.

Awesome! You have made your first contribution. If you have any doubts please let us know in the comments.

#### BE OPEN!
