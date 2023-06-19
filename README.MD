# Intro - Resys monorepo
Currently there are 2 setups: bazel-setup and maven-setup.
This repo contains two setups because creating monorepo and migrating to bazel at the same time is to big of a task.  
Migration will be done in multiple phases.  
I: Migrate typescript projects into monorepo
II: Migrate java projects into monorepo
III: Add bazel support for all typescript projects
IV: ...
  
bazel-setup is for typescript projects but will contain java projects later.
maven-setup all java based project


# NPM dependencies
All dependencies must defined in package.json, if dependency does not exist in here it does not exist anywhere.


# Structure for projects
There are two folders in total:  
* apps - all application type projects  
* packages - all library type projects
  * package.json - does not contain any dependencies
  * all dependencies must be defined in BUILD files