FROM node:8.15.0
ENV LAST_UPDATED 20160617T185400

# Copy source code
COPY . /app

# Change working directory
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
ENV PORT 80
EXPOSE 80

# Launch application
CMD ["npm","start"]