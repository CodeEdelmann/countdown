# Countdown API

This is the Django Rest Framework portion of the Countdown project.

# Quick Setup

Perform the below steps for first-time configuration
This will build and start the containers in detached mode, then apply the required migrations

 - `cd` into this directory
 - Run `make build`
 - Run `make start`
 - Run `make migrate`

At this point, the API can be used. When done, please use the below command to stop the API and remove the containers.

 - Run `make stop`
