import Image from './components/Image/index'
import Audio from './components/Audio/index'
import Video from './components/Video/index'

export default {
    data() {
        return {};
    },
    components: {
        'ImageB64': Image,
        'AudioB64': Audio,
        'VideoB64': Video
    },
    computed: {
        contents: function() {
            return this.$store.state.contents;
        }
    }
}