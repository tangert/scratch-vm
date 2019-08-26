const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const color = require('../../util/color');
const log = require('../../util/log');

/**
 * Manage communication with a Boost peripheral over a Bluetooth Low Energy client socket.
 */
class Debug {
    constructor (runtime) {
        /**
         * The Scratch 3.0 runtime used to trigger the green flag button.
         * @type {Runtime}
         * @private
         */
        this._runtime = runtime;
        this.numLabels = 1;
    }
    // Can extensions maintain state?
    // Have to call in from the vm/runtime to retrieve stuff
    getInfo() {
      console.log("calling get info")
        return {
            id: "debugging",
            name: "Tyler's experiments",
            blocks: [{
                    opcode: "emojilabel",
                    blockType: BlockType.COMMAND,
                    text: this.buildEmojiList(this.numLabels),
                    arguments: {
                        emoji0: {
                            type: ArgumentType.STRING,
                            defaultValue: "❤️",
                            menu: 'EMOJI_LABELS',
                        },
                        emoji1: {
                            type: ArgumentType.STRING,
                            defaultValue: "❤️",
                            menu: 'EMOJI_LABELS',
                        },
                    }
                },
                {
                      opcode: "surprise",
                      blockType: BlockType.COMMAND,
                      text: "Surprise!",
                      arguments: {}
                  },
                {
                      opcode: "suggestion",
                      blockType: BlockType.COMMAND,
                      text: "Suggestion!",
                      arguments: {}
                  }
              ],
          //we will get back to this in a later tutorial
          menus: {
            EMOJI_LABELS: {
                acceptReporters: false,
                items: ['❤️','🐛','😯','⚒️','❓','✅']
            },
          }
    }
  }

  buildEmojiList(num){
    let str = ""
    for(let i in [...Array(num).keys()]) {
      str += `[emoji${i}]`
    }
    return str
  }


  surprise(){
    console.log("Surprise!")
  }

  suggestion(){
    console.log("suggestion block!")
  }
  
  emojilabel(){
    this.numLabels +=1;
    this.getInfo()
    console.log(this.numLabels)
    console.log("making an emoji label!")
  }
  // motion_glideto() {
  //   console.log("wow")
  // }
}

// Scratch.extensions.register(new NitroBlock());
module.exports = Debug;
