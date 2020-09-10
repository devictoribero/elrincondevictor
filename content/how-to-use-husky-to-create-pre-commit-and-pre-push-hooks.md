---
author_name: Victor Ribero
author_img_src: /static/img/victor-ribero-avatar.jpg
title: How to use Husky to create pre-commit and pre-push hooks
slug: how-to-use-husky-to-create-pre-commit-and-pre-push-hooks
description: Learn how to execute Husky to prevennt git push and git commit to execute your tests, linting, formating or whatever you want.
img_src: /static/img/how-to-execute-tests-before-git-commits-using-husky.png
img_preview_src: /static/img/how-to-execute-tests-before-git-commits-using-husky-preview.png
date: 2020-09-07
tags: [tech]
isFeatured: true
---

Not everyone remembers to execute the tests, the linter or the prettier before commiting changes, and even if we do, it's exhausting to do it manually every time. That's why automation always comes to rescue.

Building a [worldwide community for houseplant lovers](https://chooseyourplant.com?ref=devictoribero) I've noticed that I had a lot of tests but I didn't include them in any pipeline or git hook. And what's the problem? After a few days, I forgot of their existannce and this is not good 👎.

We can automate to execute things before we create a commit or we push changes in a remote repository. This is great because it reduces cognitive load when coding which means less stress and more focus. Some people uses [git hooks](https://www.atlassian.com/git/tutorials/git-hooks) locally to prettify the code and/or run the linter.

If you are using git as version control, you might know that it has some native hooks that are hidden inside the .git folder. You can check it by running `ls .git/hooks/` in the root of your project. If you do so, you'll see some `.sample` files.

## How to use git hooks?

The best and easiest way to use git hooks locally in a Node enviromennt, it's by using a library well-known called [husky](https://github.com/typicode/husky). It handles git hooks for us with a small configuration!

## How create a pre-commit or pre-push with Husky?

The usage of Husky it's pretty straight forward. We only need to install the package and add some configuration to the package.json. **Nothing else!**

### Requirements

`Husky` package installed, Node version `>=10` and Git version `>= 2.13.0`.


### How to install Husky

It's important to install `Husky` only for `dev` environments because it's not a production requirement. You can install it by executing the following line of code:

`npm run install husky --save-dev`

### Add the required configuration in package.json

In the root of your project you'll have a package.json. Open it and add a `Husky` configuration in the root of the JSON.

In this project I only added the execution of the test in the `pre-commit` and `pre-push` git hook, but you can add your linting rules, formatting, or whatever you like. Now, every time I try to execute `git commit` or `git push` the tests are executed. Example below 👇:

![A computer terminal showing the execution of test before commiting changes](/static/img/how-to-use-husky-to-create-pre-commit-and-pre-push-hooks-1.png)

### How to use the pre-commit or pre-push git hook?

You don't need to do anything special apart from create a commit! Try it out by running:

`git commit -m "Finally I'm executing tests on each commit"`

![A computer terminal showing the execution of test before commiting changes](/static/img/how-to-use-husky-to-create-pre-commit-and-pre-push-hooks-2.gif)

### What problems you can encounter

[As you can see in this thread](https://github.com/typicode/husky/issues/445) some people (me included) can't make hooks work after installing `Husky`. To solve it, you just need to remove the git hooks folder, uninstall Husky and install it againn. You can do this by running:

```
rm -rf .git/hooks/
npm uninstall husky
npm install --save-dev husky
```

Afer that, it should be all OK and the tests, the linter or whatever you configured should be executed in the next git commit.