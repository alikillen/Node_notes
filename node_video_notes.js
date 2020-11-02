// https://www.youtube.com/watch?v=U8XF6AFGqlc&ab_channel=TraversyMedia

/**
 * what is it and how does node js work
 * installing node js
 * REPL -read eval print loop (running JS in command line)
 * NPM
 * how modules work
 * package.json file
 * basic web server
 */

 /**
  * what is node js?
  * JS runtime built on chrome V8 JS engine
  * node is basically JS running on server
  * can build in depth sopphistacted web apps
  * uses an event dirven(event loop), nonblocking model 
  */

  /**
   * non blocking I/O
   * works on single thread using non blocking IO calls
   * supports tens of thousands of concurrent connections
   * optimises throghput** and scalability in web apps with many IO operations
   * node is fast and efficient
   */


   /**
    * EVENT LOOP
    * single threaded
    * supports concurrency via events and callbacks
    * waits for events, uses event emitter class to bind events to listeners
    * triggers callback when event is detected
    * non  blocking
    * event emitters --> events --> event loop --> event handlers (run the code)
    * node js is ASYNCHRONOUS
    */

    /**
     * what can we build with node JS?
     * REST APIs and backend apps
     * realtime services - chat, games etc
     * blogs, CMS, social apps
     * utilties and tools
     * anything that is not CPU-intensive
     */

     /**
      * NPM
      * used to install node programs and modules
      * easy to specify and link dependencies
      * modeules get installed into the node_modules folder
      * "nom install express"
      * "npm install -g express" (installs globally)
      */

      /**
       * POPULAR MODULES
       * express - complete web dev framework to create apps
       * connect - extensible HTTP server framework
       * socket.io - server side component for websocksets
       * pug/jade - template engine inspired by HAML
       * mongo/mongoose - wrappers to interact with mongoDB
       * coffee-script -coffescript compiler (superset of JS)
       * redis - redis client library (kinda noSWL db, caching system)
       */

       /**
        * PACKAGE.JSON FILE
        * important file in root of app
        * how app is structured and how to install it - versions, author, description, dependencies
        * can create manually or run npm init
        * 
        */

        // install node - can use node.exe in install files to run and check variables etc (like ERB)
       // Can have multi line commands and create functions here too - can do anything we do in JS, except for using document objcet
       // its javascript without the browser
       // CAN BE ACCESSED BY TYPING NODE IN TERMINAL!! ( so do i need to install the exe?)
       // can run programs from CLI and run files from CLI in node

        /**
         * CREATING A BASIC NODE APP
         * npm init, enter details, create package.json file
         * creating a basic web server
         * 
         */