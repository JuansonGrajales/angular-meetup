FROM gitpod/workspace-full

USER gitpod

# Install Node.js
RUN bash -c ". .nvm/nvm.sh && \
    nvm install 14 && \
    nvm use 14 && \
    nvm alias default 14"

# Install Angular CLI
RUN npm install -g @angular/cli@13
