---
title: git-dev
date: 2021-09-17
tags:
 - notes
---

# git如何关联？

执行以下git命令：

```
git push --set-upstream origin dev(远程分支名)
```

:::tip

将远程 `dev` 分支和本地 `dev` 分支相关联。之后再执行 `git push` 即可。一般新建的分支在`push`的时候都需要执行这个命令和远端相关联。

