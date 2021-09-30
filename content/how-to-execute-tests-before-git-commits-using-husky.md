---
author_name: Victor Ribero
author_img_src: /public/img/victor-ribero-avatar.jpg
title: How to execute tests before git commits using Husky
slug: how-to-execute-tests-before-git-commits-using-husky
description: 🤓 Learn how to execute your tests magically before any git commit.
date: 2020-08-03
tags: [tech]
---

Some people have difficulties remembering that they have to execute the tests before commiting any changes. This is important in order to avoid pushing to the repository something that breaks our build.

Building a [worldwide community for houseplant lovers](https://chooseyourplant.com?ref=devictoribero) I've noticed that I had a lot of tests but I didn't include them in any pipeline. What's the problem you might question yourself? I noticed right away that I was not executing them. It happened to me that after X days I saw some were broken, and this is not good 👎.

Executing some logic before a commits it's important because it prevents from uploading code we don't want in the remote repository. Why? Because it could not respect some formatting or keywords standards. Some people uses [git hooks](https://www.atlassian.com/git/tutorials/git-hooks) locally to prettify and format the code along with a linter.

If you are using git as version control, you might know that it has some native hooks that are hidden inside the .git folder. You can check it by running `ls .git/hooks/` in the root of your project. If you do so, you'll see some `.sample` files.

## How can we use git hooks easily?

The best and easy way to use git hooks locally, it's by using a library well-known called [husky](https://github.com/typicode/husky). This allows us to handle git hooks super easy!

## How to use Husky to execute logic before commit?

The usage of Husky it's pretty straight forward. We only need to install the package and add some configuration to the package.json. **Nothing else!**

### How to install Husky

It's important to instal Husky only in `dev` environments because it's not a production requirement. You can install Husky by executing the following line of code:

```
npm install husky --save-dev
```

### Add the Husky configuration in package.json

In the root of your project you'll have a package.json. Open it and ass a Husky configuration in the root of the JSON.

I found interesting to add tests on my `pre-commit` and `pre-push`, so every time I try to execute `git commit` or `git push` the tests are executed. But feel free to add as many things as you want like linting, formatting, etc. Like the code below 👇:

```JSON
// package.json
{
  // here goes more config
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  }
}
```

### And now what?

Now you're ready to use them! Try it out by committing something running:

`git commit -m "Finally I'm executing tests on each commit"`

