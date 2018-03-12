package com.example.raffi.apostarexample;
import android.content.Context;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by Raffi on 08.03.2018.
 */

public class GameFragment extends Fragment {
    private RecyclerView gameOverview;
    private GameAdapter gameAdapter;
    private RecyclerView.LayoutManager layoutManager;
    private TextView emptyView;

    final ArrayList<Game> games = new ArrayList<>();

    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View root = inflater.inflate(R.layout.fragment_home, container, false);

        gameOverview = root.findViewById(R.id.gameOverview);
        gameOverview.setHasFixedSize(true);

        emptyView = root.findViewById(R.id.empty_view);

        layoutManager = new LinearLayoutManager(getActivity());
        gameOverview.setLayoutManager(layoutManager);

        games.add(new Game("Schweiz","1","Deutschland","0"));
        games.add(new Game("Spanien","4","Australien","1"));
        games.add(new Game("England","2","Frankreich","2"));

        gameAdapter = new GameAdapter(games);
        gameOverview.setAdapter(gameAdapter);

        return root;
    }

    @Override
    public void onAttach(Context activity) {
        super.onAttach(activity);
    }
}
