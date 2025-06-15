FROM node:12

# Install Angular CLI v8 globally
RUN npm install -g @angular/cli@8.0.4

# Install required OS packages (optional but helpful)
RUN apt-get update && apt-get install -y git