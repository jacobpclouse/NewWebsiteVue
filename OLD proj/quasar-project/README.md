# Jacob Portfolio Website (quasar-project)

My new webpage made with vue and quasar!

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).


----


### IF you have issues with installing quasar:
It seems like Quasar CLI isn't installed globally on your system or it might not be added to your PATH. Here's how you can troubleshoot and resolve this issue:

1. **Check if Quasar CLI is installed globally**: Run the following command to see if Quasar CLI is installed globally on your system:

    ```
    npm list -g @quasar/cli
    ```

    If it's installed, you should see the version number. If not, you'll need to install it globally.

2. **Install Quasar CLI globally**: If Quasar CLI is not installed globally, you can install it using npm:

    ```
    npm install -g @quasar/cli
    ```

    This command will install Quasar CLI globally on your system.

3. **Verify installation**: After installation, verify if Quasar CLI is accessible globally by running:

    ```
    quasar -v
    ```

    You should see the version number of Quasar CLI printed in the terminal.

4. **Check your PATH**: If Quasar CLI is installed but still not recognized, it's possible that the directory where npm installs global packages is not added to your system's PATH variable. You'll need to add it manually. The directory where npm installs global packages depends on your operating system:

    - **Windows**: Typically, npm installs global packages in `C:\Users\<username>\AppData\Roaming\npm`. You'll need to add this directory to your PATH.
    - **Unix/Linux**: Typically, npm installs global packages in `/usr/local/bin` or `~/.npm-global/bin`. You'll need to add this directory to your PATH.

    Instructions for adding directories to the PATH variable can vary depending on your operating system.

5. **Restart your terminal**: After making changes to your PATH variable, close and reopen your terminal to ensure the changes take effect.

Once you've completed these steps, try running `quasar dev` again, and it should work without the "command not found" error.