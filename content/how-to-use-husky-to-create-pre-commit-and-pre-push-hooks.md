---
author_name: Victor Ribero
author_img_src: /static/img/victor-ribero-avatar.jpg
title: How to use Husky to create pre-commit and pre-push hooks
slug: how-to-use-husky-to-create-pre-commit-and-pre-push-hooks
description: Learn how to execute your tests, linting, formating or whatever you want before any git commit with git hooks and Husky.
img_src: /static/img/how-to-execute-tests-before-git-commits-using-husky.png
img_preview_src: /static/img/how-to-execute-tests-before-git-commits-using-husky-preview.png
date: 2020-08-03
tags: [tech]
isFeatured: true
---

Not everyone remembers to execute the tests, the linter or the prettier before commiting changes. That's why automation always comes to rescue.

Building a [worldwide community for houseplant lovers](https://chooseyourplant.com?ref=devictoribero) I've noticed that I had a lot of tests but I didn't include them in any pipeline or git hook. What's the problem you might question yourself? After some days, I stopped executing them, so they were not up-to-date. And this is not good 👎.

To automate a pre-commit git hook is a good choice that reduces cognitive load when coding which means less stress and more focus. Some people uses [git hooks](https://www.atlassian.com/git/tutorials/git-hooks) locally to prettify the code and/or run the linter.

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

```JSON
// package.json
{
  ...
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test",
      "...": "..."
    }
  },
  ...
}
```

### How to use the pre-commit or pre-push git hook?

You don't need to do anything special apart from create a commit! Try it out by running:

`git commit -m "Finally I'm executing tests on each commit"`

![A computer terminal showing the execution of test before commiting changes](/static/img/how-to-use-husky-to-create-pre-commit-and-pre-push-hooks.gif)

### What problems you can encounter

[As you can see in this thread](https://github.com/typicode/husky/issues/445) some people (me included) can't make hooks work after installing `Husky`. To solve it, you just need to remove the git folder by running:

`rm -rf .git/hooks/`

Afer that, uninstall and reinstall `Husky` and it will would work.

