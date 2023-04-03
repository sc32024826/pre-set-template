<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
// import { useAuthStore } from '@/store/modules/auth';
import { removeInterceptor, setupInterceptors } from '@/utils/interceptors';
// import { useRouterStore } from '@/store/modules/router';

onLaunch(() => {
    console.log("App Launch");
    removeInterceptor();

    setupInterceptors();
    // const appStore = useRouterStore();
    // appStore.initialize();
});
onShow(() => {
    console.log("App Show");
    // const authStore = useAuthStore();
    // authStore.initToken();
});
onHide(() => {
    console.log("App Hide");
});
</script>

<style lang="scss">
</style>
