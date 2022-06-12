FROM debian:11

# add dev tools
RUN apt-get update && \
    apt-get install git vim sudo bash-completion wget -y

# install hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v0.100.2/hugo_extended_0.100.2_Linux-64bit.deb && apt install ./hugo_extended_0.100.2_Linux-64bit.deb && rm hugo_extended_0.100.2_Linux-64bit.deb

# add dev user
RUN useradd -m dev && echo "dev:dev" | chpasswd && adduser dev sudo
USER dev
WORKDIR /home/dev

# prepare .ssh directory for github access
RUN mkdir -p /home/dev/.ssh
RUN chown -R dev:dev /home/dev/.ssh

ENTRYPOINT ["bash"]
