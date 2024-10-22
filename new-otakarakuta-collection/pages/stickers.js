import dynamic from 'next/dynamic';

// StickersPageコンポーネントを動的にインポートし、サーバーサイドレンダリングを無効にします
const StickersPage = dynamic(() => import('../components/StickersPage'), {
    ssr: false,
});

export default StickersPage;
