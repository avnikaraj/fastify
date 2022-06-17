# Crate app dir
FROM node:16.15.1

WORKDIR /usr/src/app

# Install dependencies

# Wildcard for all packages in packege*.json

COPY package*.json ./

RUN npm install


# Copy all src file

COPY . .

EXPOSE 8080

CMD ["node", "src/server.js"]