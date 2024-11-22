# Commit rules

## Types

## API relevant changes

- [x] **_feat_** : Commits, that adds a new feature
- [x] **_fix_** : Commits, that fixes a bug

- [x] **_refactor_** : Commits, that rewrite/restructure your code, however does not change any behaviour

- [x] **_perf_** : Commits are special 'refactor' commits, that improves performance

- [x] **_style_** : Commits, that do not affect the meaning (white-space, formatting, missing semi-colons, etc)

- [x] **_test_** : Commits, that add missing tests or correcting existing tests

- [x] **_docs_** : Commits, that affect documentation only

- [x] **_build_** : Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...

- [x] **_ops_** : Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...

- [x] **_chore_** : Miscellaneous commits e.g. modifying '.gitignore'

### Scopes

The **scope** provides additional contextual information.

Is an optional part of the format
Allowed Scopes depends on the specific project
Don't use issue identifiers as scopes

### Subject

The **subject** contains a succinct description of the change.

Is a mandatory part of the format
Use the imperative, present tense: "change" not "changed" nor "changes"
Don't capitalize the first letter
No dot (.) at the end

### Body

The **body** should include the motivation for the change and contrast this with previous behavior.

Is an optional part of the format
Use the imperative, present tense: "change" not "changed" nor "changes"
This is the place to mention issue identifiers and their relations

### Footer

The **footer** should contain any information about 'Breaking Changes' and is also the place to reference Issues that this commit refers to.

Is an optional part of the format
optionally reference an issue by its id.
Breaking Changes should start with the word **BREAKING CHANGES**: followed by space or two newlines. The rest of the commit message is then used for this.

[More info](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13#types)
