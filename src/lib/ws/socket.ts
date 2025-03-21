
export function createWebSocket(socketName: string, onMessage:(data: any) => void) {
  const socketURL = `${process.env.NEXT_PUBLIC_WEB_SOCKET_URL}/${socketName}/`

  const socket = new WebSocket(socketURL)

  socket.onopen = () => console.log("WebSocket conectado");
  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };
  socket.onerror = (error) => console.error("WebSocket error:", error);
  socket.onclose = () => console.log("WebSocket cerrado");

  return socket;
}