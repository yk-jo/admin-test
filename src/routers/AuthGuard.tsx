import { useAuthStore } from "@/stores/authStore";
import { PropsWithChildren, useEffect } from "react";
import { useMatches, useNavigate } from "react-router-dom";
import PathContants from "./pathConstants";


type RouteHandle = { requireAuth?: boolean } | undefined;
export default function AuthGuard({ children }: PropsWithChildren) {
  const matches = useMatches();
  const navigate = useNavigate();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    const requireAuth = matches.some(
      ({ handle }) => (handle as RouteHandle)?.requireAuth
    );
    if (requireAuth && !accessToken) {
      navigate(PathContants.Login, { replace: true });
    }
  }, [matches]);

  return children;
}
