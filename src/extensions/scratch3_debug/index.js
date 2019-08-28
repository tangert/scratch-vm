const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const color = require('../../util/color');
const log = require('../../util/log');

/**
 * Manage communication with a Boost peripheral over a Bluetooth Low Energy client socket.
 */

const EMOJIS = ['❤️','🐛','😯','⚒️','❓','✅'];

class Debug {
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;
    }
    // Can extensions maintain state?
    // Have to call in from the vm/runtime to retrieve stuff
    getInfo() {
      console.log("calling get info")
        return {
            id: "debug",
            name: "Debug",
            color1: "#FFE28A",
            color2: "#BFA968",
            color3: "#BFA968",
            blocks: [{
                    opcode: "emojilabel",
                    blockType: BlockType.COMMAND,
                    text: '[emoji]',
                    arguments: {
                        emoji: {
                            type: ArgumentType.STRING,
                            defaultValue: "❤️",
                            menu: 'EMOJI_LABELS',
                        }
                    }
                },
                {
                    opcode: 'comment',
                    text: formatMessage({
                        default: '[WORDS]',
                        description: 'write down a comment'
                    }),
                    blockType: BlockType.COMMAND,
                    arguments: {
                        WORDS: {
                            type: ArgumentType.STRING,
                            defaultValue: "Write a comment here."
                        }
                    }
                },
              ],
          //we will get back to this in a later tutorial
          menus: {
            EMOJI_LABELS: {
                acceptReporters: false,
                items: EMOJIS
            }
          }
    }
  }

  buildEmojiList(num){
    let str = ""
    for(let i in EMOJIS) {
      str += `[emoji${i}]`
    }
    return str
  }

  emojilabel(){
  }

  comment(){

  }
}

// Scratch.extensions.register(new NitroBlock());
module.exports = Debug;
