FROM nginx:1.23
COPY nginx.conf /etc/nginx/nginx.conf
COPY src/index.html /usr/share/nginx/html/
COPY src/script.js /usr/share/nginx/html/
COPY src/styles.css /usr/share/nginx/html/
EXPOSE 80