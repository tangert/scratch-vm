const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const color = require('../../util/color');
const log = require('../../util/log');

/**
 * Manage communication with a Boost peripheral over a Bluetooth Low Energy client socket.
 */
class Surprise {
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

    /*
    colors yellow stuff
    color1: "#FFE28A",
    color2: "#BFA968",
    color3: "#BFA968",

    grey: 575E75
    */
    getInfo() {
      console.log("calling get info")
        return {
            id: "surprise",
            name: "Surprise",
            blocks: [
                {
                      opcode: "surprise",
                      blockType: BlockType.COMMAND,
                      text: "Surprise!",
                      arguments: {}
                  },

                  {
                        opcode: "surprisenow",
                        blockType: BlockType.COMMAND,
                        text: "Surprise me NOW!",
                        arguments: {}
                    },

                  {
                        opcode: "surprisecategory",
                        blockType: BlockType.COMMAND,
                        text: "Surprise from [category]!",
                        arguments: {
                          category: {
                            type: ArgumentType.STRING,
                            defaultValue: "all categories",
                            menu: 'SURPRISE_CATEGORIES'
                          }
                        }
                    },
                  //   {
                  //     opcode: "suggestion",
                  //     blockType: BlockType.COMMAND,
                  //     text: "Suggestion!",
                  //     arguments: {}
                  // }
              ],
          //we will get back to this in a later tutorial
          menus: {
            SURPRISE_CATEGORIES: {
                acceptReporters: false,
                items: ['all categories','motion','looks','sounds','events', 'control']
            }
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

  surprisenow(){

  }

  surprisemulti() {
    console.log("Surprise multi!")
  }

  surprisecategory() {

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
module.exports = Surprise;
