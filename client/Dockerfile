FROM node:17-alpine3.12


WORKDIR /

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

# start app
CMD ["npm", "start"]