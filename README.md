# Javascript Technical Interview Junior Full Stack
My journey to become Junior Full Stack Developer


<h3>Git Notes:</h3>
-Create a branch for the first chapter: <b>git branch #-name-of-exercise</b>.<br>
-Switch to the new branch: <b>git checkout #-name-of-exercise.</b><br>

-Commit the changes: <b>git commit -am "Added content for #-name-of-exercise".</b><br>
(maybe better "git add ." alone and later "git commit -m "with message"<br>
-Push the branch to a remote repository: <b>git push -u origin #-name-of-exercise</b><br>


<h3>To remove a folder and all files in the folder recursively:</h3><br>

Tip by <a href="https://stackoverflow.com/questions/1274057/how-do-i-make-git-forget-about-a-file-that-was-tracked-but-is-now-in-gitignore">CB Bailey at Stackoverflow</a><br>

```
git rm -r --cached
```
The removal of the file from the head revision will happen on the next commit.<br>

WARNING: While this will not remove the physical file from your local machine,<br>
it will remove the files from other developers' machines on their next git pull.
