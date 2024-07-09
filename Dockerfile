FROM shimohira/ubi8-s2i-web-app:latest
USER 1001
COPY . .
CMD ["npm", "start"]