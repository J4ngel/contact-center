
export function createWebSocket(onMessage:(data: any) => void) {
  const socket = new WebSocket(process.env.NEXT_PUBLIC_WEB_SOCKET_URL||'')

  socket.onopen = () => console.log("WebSocket conectado");
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };
  socket.onerror = (error) => console.error("WebSocket error:", error);
  socket.onclose = () => console.log("WebSocket cerrado");

  return socket;
}