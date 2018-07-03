import draggable from 'vuedraggable'

const fileToBase64 = require('./modules/base64').fileToBase64;

export default {
    data() {
        return {};
    },
    components: {
        'draggable': draggable
    },
    computed: {
        contents: {
            get: function() { return this.$store.state.contents },
            set: function(val) { this.$store.state.contents = val }
        }
    },
    methods: {
        _storeAddContent: function(file, type) {
            if (file) {
                fileToBase64(file)
                    .then((path) => {
                        this.$store.commit('addContent', { name: file.name, path: path, type: type });
                    })
                    .catch(err => console.log(err));
            } else console.log('no file');
        },
        addContent: function(type) {
            let file = null;
            switch (type) {
                case 'img':
                    file = this.$refs.img.files[0];
                    break;
                case 'audio':
                    file = this.$refs.audio.files[0];
                    break;
                case 'video':
                    file = this.$refs.video.files[0];
                    break;
                default:
                    break;
            }
            if (file) this._storeAddContent(file, type);
            else console.log('no file');
            console.log(this.$store.state.contents);
        },
        removeContent: function(ind) {
            this.$store.commit('removeContent', ind);
            console.log(this.$store.state.contents);
        }
    }
}