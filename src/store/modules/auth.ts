import { defineStore } from 'pinia';
import { getCache, removeCache, setCache } from '@/utils/cache';
import { TOKEN_KEY } from '@/enums/cacheEnum';
// import { login, logout, refreshToken } from '@/api/auth';
// import { useUserStore } from "./user";

interface AuthState {
    token?: string;
}


export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        token: undefined,
    }),
    getters: {
        getToken: (state) => state.token,
        isLogin: (state): boolean => !!state.token,
    },
    actions: {
        initToken() {
            this.token = getCache<string>(TOKEN_KEY) || undefined;
        },
        setToken(token: string | undefined) {
            setCache(TOKEN_KEY, token);
            this.token = token;
        },
        /**
         * @description 登录
         */
        // async Login(params: LoginParams): Promise<LoginModel> {
        //     const userStore = useUserStore()

        //     try {
        //         const { data } = await login(params);
        //         console.log('登录信息', data);

        //         userStore.saveUserInfo(data)

        //         this.setToken(data.token);
        //         return Promise.resolve(data);
        //     } catch (err: any) {
        //         return Promise.reject(err);
        //     }
        // },
        /**
         * @description 登出
         */
        // async loginOut(): Promise<any> {
        //     try {
        //         const res = await logout();
        //         removeCache(TOKEN_KEY);
        //         this.setToken(undefined);
        //         return Promise.resolve(res);
        //     } catch (err: any) {
        //         return Promise.reject(err);
        //     }
        // },
        /**
         * @description 刷新token
         */
        // async RefreshToken(): Promise<LoginModel> {
        //     const userStore = useUserStore()

        //     try {
        //         const { data } = await refreshToken();
        //         userStore.saveUserInfo(data)

        //         this.setToken(data.token);
        //         return Promise.resolve(data);
        //     } catch (err: any) {
        //         return Promise.reject(err);
        //     }
        // },
    },
});
