const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');

class Scratch3YourExtension {

    constructor (runtime) {
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
          // unique ID for your extension
          id: 'kodebeta',
      
          // name displayed in the Scratch UI
          name: 'kodebeta',      
          // colours to use for your extension blocks
          color1: '#000099',
          color2: '#660066',
      
          // your Scratch blocks
          blocks: [
              {
                // function where your code logic lives
                opcode: 'kodebeta',
        
                // type of block
                blockType: BlockType.REPORTER,
        
                // label to display on the block
                text: 'kodebeta [kodebeta]',
        
                // arguments used in the block
                arguments: {
                  kodebeta:{
                    type: ArgumentType.NUMBER,
                    defaultValue: 0
                  }
                }
              }
          ]

         
         
        };
      }


    /**
     * implementation of the block with the opcode that matches this name
     *  this will be called when the block is used
     */
    
    
    kodebeta ({kodebeta}) {
      
      return (kodebeta);
  }


}

module.exports = Scratch3YourExtension;

