package com.example.billetkjop;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class controller {
    @Autowired
    repository rep;

    @PostMapping("/save")
    public void saveData(ticketSave ticket){
        rep.Saveticket(ticket);
    }
    @GetMapping("/get")
    public List<ticketSave> getData(){
        return rep.getTicket();
    }
    @PostMapping("/delete")
    public void deleteData(){
        rep.deleteTicket();
    }
}
