FROM node:18
WORKDIR /usr/app/repo4
ARG NODE_ENV=production
ENV NODE_ENV=production
COPY . .
RUN npm install
CMD ["node", "indexrepo4.js"]